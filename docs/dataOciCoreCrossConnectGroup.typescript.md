# `dataOciCoreCrossConnectGroup` Submodule <a name="`dataOciCoreCrossConnectGroup` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreCrossConnectGroup <a name="DataOciCoreCrossConnectGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_group oci_core_cross_connect_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer"></a>

```typescript
import { dataOciCoreCrossConnectGroup } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup(scope: Construct, id: string, config: DataOciCoreCrossConnectGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig">DataOciCoreCrossConnectGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig">DataOciCoreCrossConnectGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreCrossConnectGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.isConstruct"></a>

```typescript
import { dataOciCoreCrossConnectGroup } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.isTerraformElement"></a>

```typescript
import { dataOciCoreCrossConnectGroup } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.isTerraformDataSource"></a>

```typescript
import { dataOciCoreCrossConnectGroup } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.generateConfigForImport"></a>

```typescript
import { dataOciCoreCrossConnectGroup } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreCrossConnectGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreCrossConnectGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreCrossConnectGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreCrossConnectGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.customerReferenceName">customerReferenceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.macsecProperties">macsecProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList">DataOciCoreCrossConnectGroupMacsecPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.ociLogicalDeviceName">ociLogicalDeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.ociPhysicalDeviceName">ociPhysicalDeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.crossConnectGroupIdInput">crossConnectGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.crossConnectGroupId">crossConnectGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `customerReferenceName`<sup>Required</sup> <a name="customerReferenceName" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.customerReferenceName"></a>

```typescript
public readonly customerReferenceName: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `macsecProperties`<sup>Required</sup> <a name="macsecProperties" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.macsecProperties"></a>

```typescript
public readonly macsecProperties: DataOciCoreCrossConnectGroupMacsecPropertiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList">DataOciCoreCrossConnectGroupMacsecPropertiesList</a>

---

##### `ociLogicalDeviceName`<sup>Required</sup> <a name="ociLogicalDeviceName" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.ociLogicalDeviceName"></a>

```typescript
public readonly ociLogicalDeviceName: string;
```

- *Type:* string

---

##### `ociPhysicalDeviceName`<sup>Required</sup> <a name="ociPhysicalDeviceName" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.ociPhysicalDeviceName"></a>

```typescript
public readonly ociPhysicalDeviceName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `crossConnectGroupIdInput`<sup>Optional</sup> <a name="crossConnectGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.crossConnectGroupIdInput"></a>

```typescript
public readonly crossConnectGroupIdInput: string;
```

- *Type:* string

---

##### `crossConnectGroupId`<sup>Required</sup> <a name="crossConnectGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.crossConnectGroupId"></a>

```typescript
public readonly crossConnectGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreCrossConnectGroupConfig <a name="DataOciCoreCrossConnectGroupConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.Initializer"></a>

```typescript
import { dataOciCoreCrossConnectGroup } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCrossConnectGroupConfig: dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.crossConnectGroupId">crossConnectGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_group#cross_connect_group_id DataOciCoreCrossConnectGroup#cross_connect_group_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `crossConnectGroupId`<sup>Required</sup> <a name="crossConnectGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupConfig.property.crossConnectGroupId"></a>

```typescript
public readonly crossConnectGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_group#cross_connect_group_id DataOciCoreCrossConnectGroup#cross_connect_group_id}.

---

### DataOciCoreCrossConnectGroupMacsecProperties <a name="DataOciCoreCrossConnectGroupMacsecProperties" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecProperties.Initializer"></a>

```typescript
import { dataOciCoreCrossConnectGroup } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCrossConnectGroupMacsecProperties: dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecProperties = { ... }
```


### DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey <a name="DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey.Initializer"></a>

```typescript
import { dataOciCoreCrossConnectGroup } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey: dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreCrossConnectGroupMacsecPropertiesList <a name="DataOciCoreCrossConnectGroupMacsecPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.Initializer"></a>

```typescript
import { dataOciCoreCrossConnectGroup } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.get"></a>

```typescript
public get(index: number): DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference <a name="DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCrossConnectGroup } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.encryptionCipher">encryptionCipher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowed">isUnprotectedTrafficAllowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.primaryKey">primaryKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList">DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecProperties">DataOciCoreCrossConnectGroupMacsecProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionCipher`<sup>Required</sup> <a name="encryptionCipher" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.encryptionCipher"></a>

```typescript
public readonly encryptionCipher: string;
```

- *Type:* string

---

##### `isUnprotectedTrafficAllowed`<sup>Required</sup> <a name="isUnprotectedTrafficAllowed" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowed"></a>

```typescript
public readonly isUnprotectedTrafficAllowed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.primaryKey"></a>

```typescript
public readonly primaryKey: DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList">DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCrossConnectGroupMacsecProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecProperties">DataOciCoreCrossConnectGroupMacsecProperties</a>

---


### DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList <a name="DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.Initializer"></a>

```typescript
import { dataOciCoreCrossConnectGroup } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.get"></a>

```typescript
public get(index: number): DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference <a name="DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCrossConnectGroup } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretId">connectivityAssociationKeySecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersion">connectivityAssociationKeySecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretId">connectivityAssociationNameSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersion">connectivityAssociationNameSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey">DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectivityAssociationKeySecretId`<sup>Required</sup> <a name="connectivityAssociationKeySecretId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretId"></a>

```typescript
public readonly connectivityAssociationKeySecretId: string;
```

- *Type:* string

---

##### `connectivityAssociationKeySecretVersion`<sup>Required</sup> <a name="connectivityAssociationKeySecretVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersion"></a>

```typescript
public readonly connectivityAssociationKeySecretVersion: string;
```

- *Type:* string

---

##### `connectivityAssociationNameSecretId`<sup>Required</sup> <a name="connectivityAssociationNameSecretId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretId"></a>

```typescript
public readonly connectivityAssociationNameSecretId: string;
```

- *Type:* string

---

##### `connectivityAssociationNameSecretVersion`<sup>Required</sup> <a name="connectivityAssociationNameSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersion"></a>

```typescript
public readonly connectivityAssociationNameSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectGroup.DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey">DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey</a>

---



