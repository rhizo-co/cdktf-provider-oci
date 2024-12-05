# `dataOciCloudGuardTargets` Submodule <a name="`dataOciCloudGuardTargets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardTargets <a name="DataOciCloudGuardTargets" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets oci_cloud_guard_targets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargets;

DataOciCloudGuardTargets.Builder.create(Construct scope, java.lang.String id)
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
//  .accessLevel(java.lang.String)
//  .compartmentIdInSubtree(java.lang.Boolean)
//  .compartmentIdInSubtree(IResolvable)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCloudGuardTargetsFilter>)
//  .id(java.lang.String)
//  .isNonSecurityZoneTargetsOnlyQuery(java.lang.Boolean)
//  .isNonSecurityZoneTargetsOnlyQuery(IResolvable)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#compartment_id DataOciCloudGuardTargets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#access_level DataOciCloudGuardTargets#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#compartment_id_in_subtree DataOciCloudGuardTargets#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#display_name DataOciCloudGuardTargets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter">DataOciCloudGuardTargetsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#id DataOciCloudGuardTargets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.isNonSecurityZoneTargetsOnlyQuery">isNonSecurityZoneTargetsOnlyQuery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#is_non_security_zone_targets_only_query DataOciCloudGuardTargets#is_non_security_zone_targets_only_query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#state DataOciCloudGuardTargets#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#compartment_id DataOciCloudGuardTargets#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.accessLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#access_level DataOciCloudGuardTargets#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#compartment_id_in_subtree DataOciCloudGuardTargets#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#display_name DataOciCloudGuardTargets#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter">DataOciCloudGuardTargetsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#filter DataOciCloudGuardTargets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#id DataOciCloudGuardTargets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isNonSecurityZoneTargetsOnlyQuery`<sup>Optional</sup> <a name="isNonSecurityZoneTargetsOnlyQuery" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.isNonSecurityZoneTargetsOnlyQuery"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#is_non_security_zone_targets_only_query DataOciCloudGuardTargets#is_non_security_zone_targets_only_query}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#state DataOciCloudGuardTargets#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetIsNonSecurityZoneTargetsOnlyQuery">resetIsNonSecurityZoneTargetsOnlyQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCloudGuardTargetsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter">DataOciCloudGuardTargetsFilter</a>>

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetCompartmentIdInSubtree"></a>

```java
public void resetCompartmentIdInSubtree()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetId"></a>

```java
public void resetId()
```

##### `resetIsNonSecurityZoneTargetsOnlyQuery` <a name="resetIsNonSecurityZoneTargetsOnlyQuery" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetIsNonSecurityZoneTargetsOnlyQuery"></a>

```java
public void resetIsNonSecurityZoneTargetsOnlyQuery()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardTargets resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargets;

DataOciCloudGuardTargets.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargets;

DataOciCloudGuardTargets.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargets;

DataOciCloudGuardTargets.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargets;

DataOciCloudGuardTargets.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCloudGuardTargets.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCloudGuardTargets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCloudGuardTargets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCloudGuardTargets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardTargets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList">DataOciCloudGuardTargetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.targetCollection">targetCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList">DataOciCloudGuardTargetsTargetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter">DataOciCloudGuardTargetsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.isNonSecurityZoneTargetsOnlyQueryInput">isNonSecurityZoneTargetsOnlyQueryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.isNonSecurityZoneTargetsOnlyQuery">isNonSecurityZoneTargetsOnlyQuery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.filter"></a>

```java
public DataOciCloudGuardTargetsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList">DataOciCloudGuardTargetsFilterList</a>

---

##### `targetCollection`<sup>Required</sup> <a name="targetCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.targetCollection"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionList getTargetCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList">DataOciCloudGuardTargetsTargetCollectionList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.compartmentIdInSubtreeInput"></a>

```java
public java.lang.Object getCompartmentIdInSubtreeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter">DataOciCloudGuardTargetsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isNonSecurityZoneTargetsOnlyQueryInput`<sup>Optional</sup> <a name="isNonSecurityZoneTargetsOnlyQueryInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.isNonSecurityZoneTargetsOnlyQueryInput"></a>

```java
public java.lang.Object getIsNonSecurityZoneTargetsOnlyQueryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isNonSecurityZoneTargetsOnlyQuery`<sup>Required</sup> <a name="isNonSecurityZoneTargetsOnlyQuery" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.isNonSecurityZoneTargetsOnlyQuery"></a>

```java
public java.lang.Object getIsNonSecurityZoneTargetsOnlyQuery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargets.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardTargetsConfig <a name="DataOciCloudGuardTargetsConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsConfig;

DataOciCloudGuardTargetsConfig.builder()
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
//  .accessLevel(java.lang.String)
//  .compartmentIdInSubtree(java.lang.Boolean)
//  .compartmentIdInSubtree(IResolvable)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCloudGuardTargetsFilter>)
//  .id(java.lang.String)
//  .isNonSecurityZoneTargetsOnlyQuery(java.lang.Boolean)
//  .isNonSecurityZoneTargetsOnlyQuery(IResolvable)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#compartment_id DataOciCloudGuardTargets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#access_level DataOciCloudGuardTargets#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#compartment_id_in_subtree DataOciCloudGuardTargets#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#display_name DataOciCloudGuardTargets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter">DataOciCloudGuardTargetsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#id DataOciCloudGuardTargets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.isNonSecurityZoneTargetsOnlyQuery">isNonSecurityZoneTargetsOnlyQuery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#is_non_security_zone_targets_only_query DataOciCloudGuardTargets#is_non_security_zone_targets_only_query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#state DataOciCloudGuardTargets#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#compartment_id DataOciCloudGuardTargets#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#access_level DataOciCloudGuardTargets#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#compartment_id_in_subtree DataOciCloudGuardTargets#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#display_name DataOciCloudGuardTargets#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter">DataOciCloudGuardTargetsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#filter DataOciCloudGuardTargets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#id DataOciCloudGuardTargets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isNonSecurityZoneTargetsOnlyQuery`<sup>Optional</sup> <a name="isNonSecurityZoneTargetsOnlyQuery" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.isNonSecurityZoneTargetsOnlyQuery"></a>

```java
public java.lang.Object getIsNonSecurityZoneTargetsOnlyQuery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#is_non_security_zone_targets_only_query DataOciCloudGuardTargets#is_non_security_zone_targets_only_query}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#state DataOciCloudGuardTargets#state}.

---

### DataOciCloudGuardTargetsFilter <a name="DataOciCloudGuardTargetsFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsFilter;

DataOciCloudGuardTargetsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#name DataOciCloudGuardTargets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#values DataOciCloudGuardTargets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#regex DataOciCloudGuardTargets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#name DataOciCloudGuardTargets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#values DataOciCloudGuardTargets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_targets#regex DataOciCloudGuardTargets#regex}.

---

### DataOciCloudGuardTargetsTargetCollection <a name="DataOciCloudGuardTargetsTargetCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollection;

DataOciCloudGuardTargetsTargetCollection.builder()
    .build();
```


### DataOciCloudGuardTargetsTargetCollectionItems <a name="DataOciCloudGuardTargetsTargetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItems;

DataOciCloudGuardTargetsTargetCollectionItems.builder()
    .build();
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails;

DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails.builder()
    .build();
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes;

DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes.builder()
    .build();
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes;

DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes.builder()
    .build();
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules;

DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules.builder()
    .build();
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails;

DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails.builder()
    .build();
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups;

DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups.builder()
    .build();
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations;

DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations.builder()
    .build();
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues;

DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues.builder()
    .build();
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings;

DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings.builder()
    .build();
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules;

DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules.builder()
    .build();
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails;

DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails.builder()
    .build();
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups;

DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups.builder()
    .build();
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations;

DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations.builder()
    .build();
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues;

DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues.builder()
    .build();
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings;

DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings.builder()
    .build();
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes;

DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes.builder()
    .build();
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules;

DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules.builder()
    .build();
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails;

DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails.builder()
    .build();
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations;

DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations.builder()
    .build();
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules;

DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules.builder()
    .build();
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails;

DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails.builder()
    .build();
```


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations;

DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardTargetsFilterList <a name="DataOciCloudGuardTargetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsFilterList;

new DataOciCloudGuardTargetsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.get"></a>

```java
public DataOciCloudGuardTargetsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter">DataOciCloudGuardTargetsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter">DataOciCloudGuardTargetsFilter</a>>

---


### DataOciCloudGuardTargetsFilterOutputReference <a name="DataOciCloudGuardTargetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsFilterOutputReference;

new DataOciCloudGuardTargetsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter">DataOciCloudGuardTargetsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsFilter">DataOciCloudGuardTargetsFilter</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsList;

new DataOciCloudGuardTargetsTargetCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionItemsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference;

new DataOciCloudGuardTargetsTargetCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.inheritedByCompartments">inheritedByCompartments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.lifecyleDetails">lifecyleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.recipeCount">recipeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.targetDetails">targetDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.targetDetectorRecipes">targetDetectorRecipes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.targetResourceType">targetResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.targetResponderRecipes">targetResponderRecipes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItems">DataOciCloudGuardTargetsTargetCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inheritedByCompartments`<sup>Required</sup> <a name="inheritedByCompartments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.inheritedByCompartments"></a>

```java
public java.util.List<java.lang.String> getInheritedByCompartments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lifecyleDetails`<sup>Required</sup> <a name="lifecyleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.lifecyleDetails"></a>

```java
public java.lang.String getLifecyleDetails();
```

- *Type:* java.lang.String

---

##### `recipeCount`<sup>Required</sup> <a name="recipeCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.recipeCount"></a>

```java
public java.lang.Number getRecipeCount();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `targetDetails`<sup>Required</sup> <a name="targetDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.targetDetails"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList getTargetDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList</a>

---

##### `targetDetectorRecipes`<sup>Required</sup> <a name="targetDetectorRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.targetDetectorRecipes"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList getTargetDetectorRecipes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList</a>

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.targetResourceId"></a>

```java
public java.lang.String getTargetResourceId();
```

- *Type:* java.lang.String

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.targetResourceType"></a>

```java
public java.lang.String getTargetResourceType();
```

- *Type:* java.lang.String

---

##### `targetResponderRecipes`<sup>Required</sup> <a name="targetResponderRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.targetResponderRecipes"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList getTargetResponderRecipes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItems">DataOciCloudGuardTargetsTargetCollectionItems</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.securityZoneDisplayName">securityZoneDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.securityZoneId">securityZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.targetResourceType">targetResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.targetSecurityZoneRecipes">targetSecurityZoneRecipes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityZoneDisplayName`<sup>Required</sup> <a name="securityZoneDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.securityZoneDisplayName"></a>

```java
public java.lang.String getSecurityZoneDisplayName();
```

- *Type:* java.lang.String

---

##### `securityZoneId`<sup>Required</sup> <a name="securityZoneId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.securityZoneId"></a>

```java
public java.lang.String getSecurityZoneId();
```

- *Type:* java.lang.String

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.targetResourceType"></a>

```java
public java.lang.String getTargetResourceType();
```

- *Type:* java.lang.String

---

##### `targetSecurityZoneRecipes`<sup>Required</sup> <a name="targetSecurityZoneRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.targetSecurityZoneRecipes"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList getTargetSecurityZoneRecipes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.securityPolicies">securityPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `securityPolicies`<sup>Required</sup> <a name="securityPolicies" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.securityPolicies"></a>

```java
public java.util.List<java.lang.String> getSecurityPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.values">values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```java
public java.lang.String getConfigKey();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList getValues();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">listType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">managedListType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `listType`<sup>Required</sup> <a name="listType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```java
public java.lang.String getListType();
```

- *Type:* java.lang.String

---

##### `managedListType`<sup>Required</sup> <a name="managedListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```java
public java.lang.String getManagedListType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.conditionGroups">conditionGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">isConfigurationAllowed</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.riskLevel">riskLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionGroups`<sup>Required</sup> <a name="conditionGroups" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.conditionGroups"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList getConditionGroups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList</a>

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.configurations"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList getConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList</a>

---

##### `isConfigurationAllowed`<sup>Required</sup> <a name="isConfigurationAllowed" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```java
public IResolvable getIsConfigurationAllowed();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `riskLevel`<sup>Required</sup> <a name="riskLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```java
public java.lang.String getRiskLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.queryField">queryField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `queryField`<sup>Required</sup> <a name="queryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```java
public java.lang.String getQueryField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.detector">detector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.detectorRuleId">detectorRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.entitiesMappings">entitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.managedListTypes">managedListTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.details"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList getDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList</a>

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.detector"></a>

```java
public java.lang.String getDetector();
```

- *Type:* java.lang.String

---

##### `detectorRuleId`<sup>Required</sup> <a name="detectorRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.detectorRuleId"></a>

```java
public java.lang.String getDetectorRuleId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entitiesMappings`<sup>Required</sup> <a name="entitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.entitiesMappings"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList getEntitiesMappings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `managedListTypes`<sup>Required</sup> <a name="managedListTypes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.managedListTypes"></a>

```java
public java.util.List<java.lang.String> getManagedListTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values">values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```java
public java.lang.String getConfigKey();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList getValues();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">listType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">managedListType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `listType`<sup>Required</sup> <a name="listType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```java
public java.lang.String getListType();
```

- *Type:* java.lang.String

---

##### `managedListType`<sup>Required</sup> <a name="managedListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```java
public java.lang.String getManagedListType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.conditionGroups">conditionGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">isConfigurationAllowed</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.riskLevel">riskLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionGroups`<sup>Required</sup> <a name="conditionGroups" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.conditionGroups"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList getConditionGroups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList</a>

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.configurations"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList getConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList</a>

---

##### `isConfigurationAllowed`<sup>Required</sup> <a name="isConfigurationAllowed" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```java
public IResolvable getIsConfigurationAllowed();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `riskLevel`<sup>Required</sup> <a name="riskLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```java
public java.lang.String getRiskLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField">queryField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `queryField`<sup>Required</sup> <a name="queryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```java
public java.lang.String getQueryField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detector">detector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detectorRuleId">detectorRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.entitiesMappings">entitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.managedListTypes">managedListTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.details"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList getDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList</a>

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detector"></a>

```java
public java.lang.String getDetector();
```

- *Type:* java.lang.String

---

##### `detectorRuleId`<sup>Required</sup> <a name="detectorRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detectorRuleId"></a>

```java
public java.lang.String getDetectorRuleId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entitiesMappings`<sup>Required</sup> <a name="entitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.entitiesMappings"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList getEntitiesMappings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `managedListTypes`<sup>Required</sup> <a name="managedListTypes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.managedListTypes"></a>

```java
public java.util.List<java.lang.String> getManagedListTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.detector">detector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.detectorRecipeId">detectorRecipeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.detectorRecipeType">detectorRecipeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.detectorRules">detectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.effectiveDetectorRules">effectiveDetectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.detector"></a>

```java
public java.lang.String getDetector();
```

- *Type:* java.lang.String

---

##### `detectorRecipeId`<sup>Required</sup> <a name="detectorRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.detectorRecipeId"></a>

```java
public java.lang.String getDetectorRecipeId();
```

- *Type:* java.lang.String

---

##### `detectorRecipeType`<sup>Required</sup> <a name="detectorRecipeType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.detectorRecipeType"></a>

```java
public java.lang.String getDetectorRecipeType();
```

- *Type:* java.lang.String

---

##### `detectorRules`<sup>Required</sup> <a name="detectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.detectorRules"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList getDetectorRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `effectiveDetectorRules`<sup>Required</sup> <a name="effectiveDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.effectiveDetectorRules"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList getEffectiveDetectorRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes">DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```java
public java.lang.String getConfigKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.configurations"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList getConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList</a>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.responderRuleId">responderRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.supportedModes">supportedModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.details"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList getDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `responderRuleId`<sup>Required</sup> <a name="responderRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.responderRuleId"></a>

```java
public java.lang.String getResponderRuleId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `supportedModes`<sup>Required</sup> <a name="supportedModes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.supportedModes"></a>

```java
public java.util.List<java.lang.String> getSupportedModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.effectiveResponderRules">effectiveResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.responderRecipeId">responderRecipeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.responderRules">responderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `effectiveResponderRules`<sup>Required</sup> <a name="effectiveResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.effectiveResponderRules"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList getEffectiveResponderRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `responderRecipeId`<sup>Required</sup> <a name="responderRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.responderRecipeId"></a>

```java
public java.lang.String getResponderRecipeId();
```

- *Type:* java.lang.String

---

##### `responderRules`<sup>Required</sup> <a name="responderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.responderRules"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList getResponderRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```java
public java.lang.String getConfigKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.configurations"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList getConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList</a>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails</a>

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference;

new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.responderRuleId">responderRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.supportedModes">supportedModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.details"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList getDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `responderRuleId`<sup>Required</sup> <a name="responderRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.responderRuleId"></a>

```java
public java.lang.String getResponderRuleId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `supportedModes`<sup>Required</sup> <a name="supportedModes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.supportedModes"></a>

```java
public java.util.List<java.lang.String> getSupportedModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules">DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules</a>

---


### DataOciCloudGuardTargetsTargetCollectionList <a name="DataOciCloudGuardTargetsTargetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionList;

new DataOciCloudGuardTargetsTargetCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.get"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardTargetsTargetCollectionOutputReference <a name="DataOciCloudGuardTargetsTargetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_targets.DataOciCloudGuardTargetsTargetCollectionOutputReference;

new DataOciCloudGuardTargetsTargetCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList">DataOciCloudGuardTargetsTargetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollection">DataOciCloudGuardTargetsTargetCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.property.items"></a>

```java
public DataOciCloudGuardTargetsTargetCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionItemsList">DataOciCloudGuardTargetsTargetCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollectionOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardTargetsTargetCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTargets.DataOciCloudGuardTargetsTargetCollection">DataOciCloudGuardTargetsTargetCollection</a>

---



