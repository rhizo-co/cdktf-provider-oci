# `dataOciCoreNetworkSecurityGroupVnics` Submodule <a name="`dataOciCoreNetworkSecurityGroupVnics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreNetworkSecurityGroupVnics <a name="DataOciCoreNetworkSecurityGroupVnics" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics oci_core_network_security_group_vnics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_vnics.DataOciCoreNetworkSecurityGroupVnics;

DataOciCoreNetworkSecurityGroupVnics.Builder.create(Construct scope, java.lang.String id)
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
    .networkSecurityGroupId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreNetworkSecurityGroupVnicsFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.networkSecurityGroupId">networkSecurityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#network_security_group_id DataOciCoreNetworkSecurityGroupVnics#network_security_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#id DataOciCoreNetworkSecurityGroupVnics#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `networkSecurityGroupId`<sup>Required</sup> <a name="networkSecurityGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.networkSecurityGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#network_security_group_id DataOciCoreNetworkSecurityGroupVnics#network_security_group_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#filter DataOciCoreNetworkSecurityGroupVnics#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#id DataOciCoreNetworkSecurityGroupVnics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCoreNetworkSecurityGroupVnicsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreNetworkSecurityGroupVnics resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_vnics.DataOciCoreNetworkSecurityGroupVnics;

DataOciCoreNetworkSecurityGroupVnics.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_vnics.DataOciCoreNetworkSecurityGroupVnics;

DataOciCoreNetworkSecurityGroupVnics.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_vnics.DataOciCoreNetworkSecurityGroupVnics;

DataOciCoreNetworkSecurityGroupVnics.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_vnics.DataOciCoreNetworkSecurityGroupVnics;

DataOciCoreNetworkSecurityGroupVnics.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreNetworkSecurityGroupVnics.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreNetworkSecurityGroupVnics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreNetworkSecurityGroupVnics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreNetworkSecurityGroupVnics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreNetworkSecurityGroupVnics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList">DataOciCoreNetworkSecurityGroupVnicsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.networkSecurityGroupVnics">networkSecurityGroupVnics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList">DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.networkSecurityGroupIdInput">networkSecurityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.networkSecurityGroupId">networkSecurityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.filter"></a>

```java
public DataOciCoreNetworkSecurityGroupVnicsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList">DataOciCoreNetworkSecurityGroupVnicsFilterList</a>

---

##### `networkSecurityGroupVnics`<sup>Required</sup> <a name="networkSecurityGroupVnics" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.networkSecurityGroupVnics"></a>

```java
public DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList getNetworkSecurityGroupVnics();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList">DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `networkSecurityGroupIdInput`<sup>Optional</sup> <a name="networkSecurityGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.networkSecurityGroupIdInput"></a>

```java
public java.lang.String getNetworkSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `networkSecurityGroupId`<sup>Required</sup> <a name="networkSecurityGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.networkSecurityGroupId"></a>

```java
public java.lang.String getNetworkSecurityGroupId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreNetworkSecurityGroupVnicsConfig <a name="DataOciCoreNetworkSecurityGroupVnicsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_vnics.DataOciCoreNetworkSecurityGroupVnicsConfig;

DataOciCoreNetworkSecurityGroupVnicsConfig.builder()
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
    .networkSecurityGroupId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreNetworkSecurityGroupVnicsFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.networkSecurityGroupId">networkSecurityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#network_security_group_id DataOciCoreNetworkSecurityGroupVnics#network_security_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#id DataOciCoreNetworkSecurityGroupVnics#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `networkSecurityGroupId`<sup>Required</sup> <a name="networkSecurityGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.networkSecurityGroupId"></a>

```java
public java.lang.String getNetworkSecurityGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#network_security_group_id DataOciCoreNetworkSecurityGroupVnics#network_security_group_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#filter DataOciCoreNetworkSecurityGroupVnics#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#id DataOciCoreNetworkSecurityGroupVnics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreNetworkSecurityGroupVnicsFilter <a name="DataOciCoreNetworkSecurityGroupVnicsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_vnics.DataOciCoreNetworkSecurityGroupVnicsFilter;

DataOciCoreNetworkSecurityGroupVnicsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#name DataOciCoreNetworkSecurityGroupVnics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#values DataOciCoreNetworkSecurityGroupVnics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#regex DataOciCoreNetworkSecurityGroupVnics#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#name DataOciCoreNetworkSecurityGroupVnics#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#values DataOciCoreNetworkSecurityGroupVnics#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#regex DataOciCoreNetworkSecurityGroupVnics#regex}.

---

### DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics <a name="DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_vnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics;

DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreNetworkSecurityGroupVnicsFilterList <a name="DataOciCoreNetworkSecurityGroupVnicsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_vnics.DataOciCoreNetworkSecurityGroupVnicsFilterList;

new DataOciCoreNetworkSecurityGroupVnicsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.get"></a>

```java
public DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>>

---


### DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference <a name="DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_vnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference;

new DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>

---


### DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList <a name="DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_vnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList;

new DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.get"></a>

```java
public DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference <a name="DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_network_security_group_vnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference;

new DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.timeAssociated">timeAssociated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.vnicId">vnicId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics">DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `timeAssociated`<sup>Required</sup> <a name="timeAssociated" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.timeAssociated"></a>

```java
public java.lang.String getTimeAssociated();
```

- *Type:* java.lang.String

---

##### `vnicId`<sup>Required</sup> <a name="vnicId" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.vnicId"></a>

```java
public java.lang.String getVnicId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.internalValue"></a>

```java
public DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics">DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics</a>

---



