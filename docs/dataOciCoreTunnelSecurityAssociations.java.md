# `dataOciCoreTunnelSecurityAssociations` Submodule <a name="`dataOciCoreTunnelSecurityAssociations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreTunnelSecurityAssociations <a name="DataOciCoreTunnelSecurityAssociations" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations oci_core_tunnel_security_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_tunnel_security_associations.DataOciCoreTunnelSecurityAssociations;

DataOciCoreTunnelSecurityAssociations.Builder.create(Construct scope, java.lang.String id)
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
    .ipsecId(java.lang.String)
    .tunnelId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreTunnelSecurityAssociationsFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.ipsecId">ipsecId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#ipsec_id DataOciCoreTunnelSecurityAssociations#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#tunnel_id DataOciCoreTunnelSecurityAssociations#tunnel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter">DataOciCoreTunnelSecurityAssociationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#id DataOciCoreTunnelSecurityAssociations#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ipsecId`<sup>Required</sup> <a name="ipsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.ipsecId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#ipsec_id DataOciCoreTunnelSecurityAssociations#ipsec_id}.

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.tunnelId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#tunnel_id DataOciCoreTunnelSecurityAssociations#tunnel_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter">DataOciCoreTunnelSecurityAssociationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#filter DataOciCoreTunnelSecurityAssociations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#id DataOciCoreTunnelSecurityAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCoreTunnelSecurityAssociationsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter">DataOciCoreTunnelSecurityAssociationsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreTunnelSecurityAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_tunnel_security_associations.DataOciCoreTunnelSecurityAssociations;

DataOciCoreTunnelSecurityAssociations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_tunnel_security_associations.DataOciCoreTunnelSecurityAssociations;

DataOciCoreTunnelSecurityAssociations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_tunnel_security_associations.DataOciCoreTunnelSecurityAssociations;

DataOciCoreTunnelSecurityAssociations.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_tunnel_security_associations.DataOciCoreTunnelSecurityAssociations;

DataOciCoreTunnelSecurityAssociations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreTunnelSecurityAssociations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreTunnelSecurityAssociations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreTunnelSecurityAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreTunnelSecurityAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreTunnelSecurityAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList">DataOciCoreTunnelSecurityAssociationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tunnelSecurityAssociations">tunnelSecurityAssociations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList">DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter">DataOciCoreTunnelSecurityAssociationsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.ipsecIdInput">ipsecIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tunnelIdInput">tunnelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.ipsecId">ipsecId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.filter"></a>

```java
public DataOciCoreTunnelSecurityAssociationsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList">DataOciCoreTunnelSecurityAssociationsFilterList</a>

---

##### `tunnelSecurityAssociations`<sup>Required</sup> <a name="tunnelSecurityAssociations" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tunnelSecurityAssociations"></a>

```java
public DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList getTunnelSecurityAssociations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList">DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter">DataOciCoreTunnelSecurityAssociationsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipsecIdInput`<sup>Optional</sup> <a name="ipsecIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.ipsecIdInput"></a>

```java
public java.lang.String getIpsecIdInput();
```

- *Type:* java.lang.String

---

##### `tunnelIdInput`<sup>Optional</sup> <a name="tunnelIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tunnelIdInput"></a>

```java
public java.lang.String getTunnelIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipsecId`<sup>Required</sup> <a name="ipsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.ipsecId"></a>

```java
public java.lang.String getIpsecId();
```

- *Type:* java.lang.String

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreTunnelSecurityAssociationsConfig <a name="DataOciCoreTunnelSecurityAssociationsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_tunnel_security_associations.DataOciCoreTunnelSecurityAssociationsConfig;

DataOciCoreTunnelSecurityAssociationsConfig.builder()
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
    .ipsecId(java.lang.String)
    .tunnelId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreTunnelSecurityAssociationsFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.ipsecId">ipsecId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#ipsec_id DataOciCoreTunnelSecurityAssociations#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#tunnel_id DataOciCoreTunnelSecurityAssociations#tunnel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter">DataOciCoreTunnelSecurityAssociationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#id DataOciCoreTunnelSecurityAssociations#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ipsecId`<sup>Required</sup> <a name="ipsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.ipsecId"></a>

```java
public java.lang.String getIpsecId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#ipsec_id DataOciCoreTunnelSecurityAssociations#ipsec_id}.

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#tunnel_id DataOciCoreTunnelSecurityAssociations#tunnel_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter">DataOciCoreTunnelSecurityAssociationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#filter DataOciCoreTunnelSecurityAssociations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#id DataOciCoreTunnelSecurityAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreTunnelSecurityAssociationsFilter <a name="DataOciCoreTunnelSecurityAssociationsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_tunnel_security_associations.DataOciCoreTunnelSecurityAssociationsFilter;

DataOciCoreTunnelSecurityAssociationsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#name DataOciCoreTunnelSecurityAssociations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#values DataOciCoreTunnelSecurityAssociations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#regex DataOciCoreTunnelSecurityAssociations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#name DataOciCoreTunnelSecurityAssociations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#values DataOciCoreTunnelSecurityAssociations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#regex DataOciCoreTunnelSecurityAssociations#regex}.

---

### DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations <a name="DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_tunnel_security_associations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations;

DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreTunnelSecurityAssociationsFilterList <a name="DataOciCoreTunnelSecurityAssociationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_tunnel_security_associations.DataOciCoreTunnelSecurityAssociationsFilterList;

new DataOciCoreTunnelSecurityAssociationsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.get"></a>

```java
public DataOciCoreTunnelSecurityAssociationsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter">DataOciCoreTunnelSecurityAssociationsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter">DataOciCoreTunnelSecurityAssociationsFilter</a>>

---


### DataOciCoreTunnelSecurityAssociationsFilterOutputReference <a name="DataOciCoreTunnelSecurityAssociationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_tunnel_security_associations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference;

new DataOciCoreTunnelSecurityAssociationsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter">DataOciCoreTunnelSecurityAssociationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter">DataOciCoreTunnelSecurityAssociationsFilter</a>

---


### DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList <a name="DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_tunnel_security_associations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList;

new DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.get"></a>

```java
public DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference <a name="DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_tunnel_security_associations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference;

new DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.cpeSubnet">cpeSubnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.oracleSubnet">oracleSubnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.time">time</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.tunnelSaErrorInfo">tunnelSaErrorInfo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.tunnelSaStatus">tunnelSaStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations">DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpeSubnet`<sup>Required</sup> <a name="cpeSubnet" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.cpeSubnet"></a>

```java
public java.lang.String getCpeSubnet();
```

- *Type:* java.lang.String

---

##### `oracleSubnet`<sup>Required</sup> <a name="oracleSubnet" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.oracleSubnet"></a>

```java
public java.lang.String getOracleSubnet();
```

- *Type:* java.lang.String

---

##### `time`<sup>Required</sup> <a name="time" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

---

##### `tunnelSaErrorInfo`<sup>Required</sup> <a name="tunnelSaErrorInfo" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.tunnelSaErrorInfo"></a>

```java
public java.lang.String getTunnelSaErrorInfo();
```

- *Type:* java.lang.String

---

##### `tunnelSaStatus`<sup>Required</sup> <a name="tunnelSaStatus" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.tunnelSaStatus"></a>

```java
public java.lang.String getTunnelSaStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.internalValue"></a>

```java
public DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations">DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations</a>

---



