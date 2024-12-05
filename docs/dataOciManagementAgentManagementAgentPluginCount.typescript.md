# `dataOciManagementAgentManagementAgentPluginCount` Submodule <a name="`dataOciManagementAgentManagementAgentPluginCount` Submodule" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciManagementAgentManagementAgentPluginCount <a name="DataOciManagementAgentManagementAgentPluginCount" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugin_count oci_management_agent_management_agent_plugin_count}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentPluginCount } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount(scope: Construct, id: string, config: DataOciManagementAgentManagementAgentPluginCountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig">DataOciManagementAgentManagementAgentPluginCountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig">DataOciManagementAgentManagementAgentPluginCountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciManagementAgentManagementAgentPluginCount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.isConstruct"></a>

```typescript
import { dataOciManagementAgentManagementAgentPluginCount } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.isTerraformElement"></a>

```typescript
import { dataOciManagementAgentManagementAgentPluginCount } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.isTerraformDataSource"></a>

```typescript
import { dataOciManagementAgentManagementAgentPluginCount } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.generateConfigForImport"></a>

```typescript
import { dataOciManagementAgentManagementAgentPluginCount } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciManagementAgentManagementAgentPluginCount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciManagementAgentManagementAgentPluginCount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciManagementAgentManagementAgentPluginCount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugin_count#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciManagementAgentManagementAgentPluginCount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList">DataOciManagementAgentManagementAgentPluginCountItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.groupByInput">groupByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.groupBy">groupBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.items"></a>

```typescript
public readonly items: DataOciManagementAgentManagementAgentPluginCountItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList">DataOciManagementAgentManagementAgentPluginCountItemsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.groupByInput"></a>

```typescript
public readonly groupByInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.groupBy"></a>

```typescript
public readonly groupBy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciManagementAgentManagementAgentPluginCountConfig <a name="DataOciManagementAgentManagementAgentPluginCountConfig" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentPluginCount } from 'rhizo-co-terraform-provider-oci'

const dataOciManagementAgentManagementAgentPluginCountConfig: dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugin_count#compartment_id DataOciManagementAgentManagementAgentPluginCount#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig.property.groupBy">groupBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugin_count#group_by DataOciManagementAgentManagementAgentPluginCount#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugin_count#id DataOciManagementAgentManagementAgentPluginCount#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugin_count#compartment_id DataOciManagementAgentManagementAgentPluginCount#compartment_id}.

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig.property.groupBy"></a>

```typescript
public readonly groupBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugin_count#group_by DataOciManagementAgentManagementAgentPluginCount#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugin_count#id DataOciManagementAgentManagementAgentPluginCount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciManagementAgentManagementAgentPluginCountItems <a name="DataOciManagementAgentManagementAgentPluginCountItems" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItems.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentPluginCount } from 'rhizo-co-terraform-provider-oci'

const dataOciManagementAgentManagementAgentPluginCountItems: dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItems = { ... }
```


### DataOciManagementAgentManagementAgentPluginCountItemsDimensions <a name="DataOciManagementAgentManagementAgentPluginCountItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensions.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentPluginCount } from 'rhizo-co-terraform-provider-oci'

const dataOciManagementAgentManagementAgentPluginCountItemsDimensions: dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList <a name="DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentPluginCount } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.get"></a>

```typescript
public get(index: number): DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference <a name="DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentPluginCount } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.property.pluginDisplayName">pluginDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensions">DataOciManagementAgentManagementAgentPluginCountItemsDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pluginDisplayName`<sup>Required</sup> <a name="pluginDisplayName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.property.pluginDisplayName"></a>

```typescript
public readonly pluginDisplayName: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciManagementAgentManagementAgentPluginCountItemsDimensions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensions">DataOciManagementAgentManagementAgentPluginCountItemsDimensions</a>

---


### DataOciManagementAgentManagementAgentPluginCountItemsList <a name="DataOciManagementAgentManagementAgentPluginCountItemsList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentPluginCount } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.get"></a>

```typescript
public get(index: number): DataOciManagementAgentManagementAgentPluginCountItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciManagementAgentManagementAgentPluginCountItemsOutputReference <a name="DataOciManagementAgentManagementAgentPluginCountItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentPluginCount } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList">DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItems">DataOciManagementAgentManagementAgentPluginCountItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList">DataOciManagementAgentManagementAgentPluginCountItemsDimensionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciManagementAgentManagementAgentPluginCountItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPluginCount.DataOciManagementAgentManagementAgentPluginCountItems">DataOciManagementAgentManagementAgentPluginCountItems</a>

---



