# `dataOciServiceMeshAccessPolicies` Submodule <a name="`dataOciServiceMeshAccessPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshAccessPolicies <a name="DataOciServiceMeshAccessPolicies" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies oci_service_mesh_access_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPolicies;

DataOciServiceMeshAccessPolicies.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciServiceMeshAccessPoliciesFilter>)
//  .id(java.lang.String)
//  .meshId(java.lang.String)
//  .name(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#compartment_id DataOciServiceMeshAccessPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter">DataOciServiceMeshAccessPoliciesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#id DataOciServiceMeshAccessPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.meshId">meshId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#mesh_id DataOciServiceMeshAccessPolicies#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#name DataOciServiceMeshAccessPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#state DataOciServiceMeshAccessPolicies#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#compartment_id DataOciServiceMeshAccessPolicies#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter">DataOciServiceMeshAccessPoliciesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#filter DataOciServiceMeshAccessPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#id DataOciServiceMeshAccessPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshId`<sup>Optional</sup> <a name="meshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.meshId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#mesh_id DataOciServiceMeshAccessPolicies#mesh_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#name DataOciServiceMeshAccessPolicies#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#state DataOciServiceMeshAccessPolicies#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetMeshId">resetMeshId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciServiceMeshAccessPoliciesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter">DataOciServiceMeshAccessPoliciesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetId"></a>

```java
public void resetId()
```

##### `resetMeshId` <a name="resetMeshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetMeshId"></a>

```java
public void resetMeshId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetName"></a>

```java
public void resetName()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceMeshAccessPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPolicies;

DataOciServiceMeshAccessPolicies.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPolicies;

DataOciServiceMeshAccessPolicies.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPolicies;

DataOciServiceMeshAccessPolicies.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPolicies;

DataOciServiceMeshAccessPolicies.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciServiceMeshAccessPolicies.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciServiceMeshAccessPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciServiceMeshAccessPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciServiceMeshAccessPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshAccessPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.accessPolicyCollection">accessPolicyCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList">DataOciServiceMeshAccessPoliciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter">DataOciServiceMeshAccessPoliciesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.meshIdInput">meshIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.meshId">meshId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `accessPolicyCollection`<sup>Required</sup> <a name="accessPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.accessPolicyCollection"></a>

```java
public DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList getAccessPolicyCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.filter"></a>

```java
public DataOciServiceMeshAccessPoliciesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList">DataOciServiceMeshAccessPoliciesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter">DataOciServiceMeshAccessPoliciesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `meshIdInput`<sup>Optional</sup> <a name="meshIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.meshIdInput"></a>

```java
public java.lang.String getMeshIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `meshId`<sup>Required</sup> <a name="meshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.meshId"></a>

```java
public java.lang.String getMeshId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshAccessPoliciesAccessPolicyCollection <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPoliciesAccessPolicyCollection;

DataOciServiceMeshAccessPoliciesAccessPolicyCollection.builder()
    .build();
```


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems;

DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems.builder()
    .build();
```


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules;

DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules.builder()
    .build();
```


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination;

DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination.builder()
    .build();
```


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource;

DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource.builder()
    .build();
```


### DataOciServiceMeshAccessPoliciesConfig <a name="DataOciServiceMeshAccessPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPoliciesConfig;

DataOciServiceMeshAccessPoliciesConfig.builder()
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciServiceMeshAccessPoliciesFilter>)
//  .id(java.lang.String)
//  .meshId(java.lang.String)
//  .name(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#compartment_id DataOciServiceMeshAccessPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter">DataOciServiceMeshAccessPoliciesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#id DataOciServiceMeshAccessPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.meshId">meshId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#mesh_id DataOciServiceMeshAccessPolicies#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#name DataOciServiceMeshAccessPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#state DataOciServiceMeshAccessPolicies#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#compartment_id DataOciServiceMeshAccessPolicies#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter">DataOciServiceMeshAccessPoliciesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#filter DataOciServiceMeshAccessPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#id DataOciServiceMeshAccessPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshId`<sup>Optional</sup> <a name="meshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.meshId"></a>

```java
public java.lang.String getMeshId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#mesh_id DataOciServiceMeshAccessPolicies#mesh_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#name DataOciServiceMeshAccessPolicies#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#state DataOciServiceMeshAccessPolicies#state}.

---

### DataOciServiceMeshAccessPoliciesFilter <a name="DataOciServiceMeshAccessPoliciesFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPoliciesFilter;

DataOciServiceMeshAccessPoliciesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#name DataOciServiceMeshAccessPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#values DataOciServiceMeshAccessPolicies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#regex DataOciServiceMeshAccessPolicies#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#name DataOciServiceMeshAccessPolicies#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#values DataOciServiceMeshAccessPolicies#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#regex DataOciServiceMeshAccessPolicies#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList;

new DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.get"></a>

```java
public DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference;

new DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.meshId">meshId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `meshId`<sup>Required</sup> <a name="meshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.meshId"></a>

```java
public java.lang.String getMeshId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.rules"></a>

```java
public DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList getRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems</a>

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList;

new DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.get"></a>

```java
public DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference;

new DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.ingressGatewayId">ingressGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.virtualServiceId">virtualServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ingressGatewayId`<sup>Required</sup> <a name="ingressGatewayId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.ingressGatewayId"></a>

```java
public java.lang.String getIngressGatewayId();
```

- *Type:* java.lang.String

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ports`<sup>Required</sup> <a name="ports" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `virtualServiceId`<sup>Required</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.virtualServiceId"></a>

```java
public java.lang.String getVirtualServiceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination</a>

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList;

new DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.get"></a>

```java
public DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference;

new DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.destination">destination</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.destination"></a>

```java
public DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList getDestination();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.source"></a>

```java
public DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList getSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules</a>

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList;

new DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.get"></a>

```java
public DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference;

new DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.ingressGatewayId">ingressGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.virtualServiceId">virtualServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ingressGatewayId`<sup>Required</sup> <a name="ingressGatewayId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.ingressGatewayId"></a>

```java
public java.lang.String getIngressGatewayId();
```

- *Type:* java.lang.String

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ports`<sup>Required</sup> <a name="ports" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `virtualServiceId`<sup>Required</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.virtualServiceId"></a>

```java
public java.lang.String getVirtualServiceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource</a>

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList;

new DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.get"></a>

```java
public DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference;

new DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollection">DataOciServiceMeshAccessPoliciesAccessPolicyCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.items"></a>

```java
public DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshAccessPoliciesAccessPolicyCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollection">DataOciServiceMeshAccessPoliciesAccessPolicyCollection</a>

---


### DataOciServiceMeshAccessPoliciesFilterList <a name="DataOciServiceMeshAccessPoliciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPoliciesFilterList;

new DataOciServiceMeshAccessPoliciesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.get"></a>

```java
public DataOciServiceMeshAccessPoliciesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter">DataOciServiceMeshAccessPoliciesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter">DataOciServiceMeshAccessPoliciesFilter</a>>

---


### DataOciServiceMeshAccessPoliciesFilterOutputReference <a name="DataOciServiceMeshAccessPoliciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_access_policies.DataOciServiceMeshAccessPoliciesFilterOutputReference;

new DataOciServiceMeshAccessPoliciesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter">DataOciServiceMeshAccessPoliciesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter">DataOciServiceMeshAccessPoliciesFilter</a>

---



