# `dataOciDataSafeDatabaseSecurityConfig` Submodule <a name="`dataOciDataSafeDatabaseSecurityConfig` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeDatabaseSecurityConfig <a name="DataOciDataSafeDatabaseSecurityConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_config oci_data_safe_database_security_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer"></a>

```typescript
import { dataOciDataSafeDatabaseSecurityConfig } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig(scope: Construct, id: string, config: DataOciDataSafeDatabaseSecurityConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig">DataOciDataSafeDatabaseSecurityConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig">DataOciDataSafeDatabaseSecurityConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeDatabaseSecurityConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isConstruct"></a>

```typescript
import { dataOciDataSafeDatabaseSecurityConfig } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isTerraformElement"></a>

```typescript
import { dataOciDataSafeDatabaseSecurityConfig } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeDatabaseSecurityConfig } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeDatabaseSecurityConfig } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeDatabaseSecurityConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeDatabaseSecurityConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeDatabaseSecurityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeDatabaseSecurityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.refreshTrigger">refreshTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.sqlFirewallConfig">sqlFirewallConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList">DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.timeLastRefreshed">timeLastRefreshed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.databaseSecurityConfigIdInput">databaseSecurityConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.databaseSecurityConfigId">databaseSecurityConfigId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `refreshTrigger`<sup>Required</sup> <a name="refreshTrigger" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.refreshTrigger"></a>

```typescript
public readonly refreshTrigger: number;
```

- *Type:* number

---

##### `sqlFirewallConfig`<sup>Required</sup> <a name="sqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.sqlFirewallConfig"></a>

```typescript
public readonly sqlFirewallConfig: DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList">DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastRefreshed`<sup>Required</sup> <a name="timeLastRefreshed" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.timeLastRefreshed"></a>

```typescript
public readonly timeLastRefreshed: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `databaseSecurityConfigIdInput`<sup>Optional</sup> <a name="databaseSecurityConfigIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.databaseSecurityConfigIdInput"></a>

```typescript
public readonly databaseSecurityConfigIdInput: string;
```

- *Type:* string

---

##### `databaseSecurityConfigId`<sup>Required</sup> <a name="databaseSecurityConfigId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.databaseSecurityConfigId"></a>

```typescript
public readonly databaseSecurityConfigId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeDatabaseSecurityConfigConfig <a name="DataOciDataSafeDatabaseSecurityConfigConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.Initializer"></a>

```typescript
import { dataOciDataSafeDatabaseSecurityConfig } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeDatabaseSecurityConfigConfig: dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.databaseSecurityConfigId">databaseSecurityConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_config#database_security_config_id DataOciDataSafeDatabaseSecurityConfig#database_security_config_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `databaseSecurityConfigId`<sup>Required</sup> <a name="databaseSecurityConfigId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.databaseSecurityConfigId"></a>

```typescript
public readonly databaseSecurityConfigId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_config#database_security_config_id DataOciDataSafeDatabaseSecurityConfig#database_security_config_id}.

---

### DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig <a name="DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig.Initializer"></a>

```typescript
import { dataOciDataSafeDatabaseSecurityConfig } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig: dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList <a name="DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.Initializer"></a>

```typescript
import { dataOciDataSafeDatabaseSecurityConfig } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.get"></a>

```typescript
public get(index: number): DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference <a name="DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeDatabaseSecurityConfig } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.excludeJob">excludeJob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.timeStatusUpdated">timeStatusUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.violationLogAutoPurge">violationLogAutoPurge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig">DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludeJob`<sup>Required</sup> <a name="excludeJob" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.excludeJob"></a>

```typescript
public readonly excludeJob: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeStatusUpdated`<sup>Required</sup> <a name="timeStatusUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.timeStatusUpdated"></a>

```typescript
public readonly timeStatusUpdated: string;
```

- *Type:* string

---

##### `violationLogAutoPurge`<sup>Required</sup> <a name="violationLogAutoPurge" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.violationLogAutoPurge"></a>

```typescript
public readonly violationLogAutoPurge: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig">DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig</a>

---



