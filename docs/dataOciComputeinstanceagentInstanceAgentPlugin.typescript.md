# `dataOciComputeinstanceagentInstanceAgentPlugin` Submodule <a name="`dataOciComputeinstanceagentInstanceAgentPlugin` Submodule" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciComputeinstanceagentInstanceAgentPlugin <a name="DataOciComputeinstanceagentInstanceAgentPlugin" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugin oci_computeinstanceagent_instance_agent_plugin}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.Initializer"></a>

```typescript
import { dataOciComputeinstanceagentInstanceAgentPlugin } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin(scope: Construct, id: string, config: DataOciComputeinstanceagentInstanceAgentPluginConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig">DataOciComputeinstanceagentInstanceAgentPluginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig">DataOciComputeinstanceagentInstanceAgentPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciComputeinstanceagentInstanceAgentPlugin resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.isConstruct"></a>

```typescript
import { dataOciComputeinstanceagentInstanceAgentPlugin } from 'rhizo-co-terraform-provider-oci'

dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.isTerraformElement"></a>

```typescript
import { dataOciComputeinstanceagentInstanceAgentPlugin } from 'rhizo-co-terraform-provider-oci'

dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.isTerraformDataSource"></a>

```typescript
import { dataOciComputeinstanceagentInstanceAgentPlugin } from 'rhizo-co-terraform-provider-oci'

dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.generateConfigForImport"></a>

```typescript
import { dataOciComputeinstanceagentInstanceAgentPlugin } from 'rhizo-co-terraform-provider-oci'

dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciComputeinstanceagentInstanceAgentPlugin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciComputeinstanceagentInstanceAgentPlugin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciComputeinstanceagentInstanceAgentPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciComputeinstanceagentInstanceAgentPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.timeLastUpdatedUtc">timeLastUpdatedUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.instanceagentIdInput">instanceagentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.instanceagentId">instanceagentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeLastUpdatedUtc`<sup>Required</sup> <a name="timeLastUpdatedUtc" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.timeLastUpdatedUtc"></a>

```typescript
public readonly timeLastUpdatedUtc: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceagentIdInput`<sup>Optional</sup> <a name="instanceagentIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.instanceagentIdInput"></a>

```typescript
public readonly instanceagentIdInput: string;
```

- *Type:* string

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceagentId`<sup>Required</sup> <a name="instanceagentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.instanceagentId"></a>

```typescript
public readonly instanceagentId: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciComputeinstanceagentInstanceAgentPluginConfig <a name="DataOciComputeinstanceagentInstanceAgentPluginConfig" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.Initializer"></a>

```typescript
import { dataOciComputeinstanceagentInstanceAgentPlugin } from 'rhizo-co-terraform-provider-oci'

const dataOciComputeinstanceagentInstanceAgentPluginConfig: dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugin#compartment_id DataOciComputeinstanceagentInstanceAgentPlugin#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.instanceagentId">instanceagentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugin#instanceagent_id DataOciComputeinstanceagentInstanceAgentPlugin#instanceagent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.pluginName">pluginName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugin#plugin_name DataOciComputeinstanceagentInstanceAgentPlugin#plugin_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugin#id DataOciComputeinstanceagentInstanceAgentPlugin#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugin#compartment_id DataOciComputeinstanceagentInstanceAgentPlugin#compartment_id}.

---

##### `instanceagentId`<sup>Required</sup> <a name="instanceagentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.instanceagentId"></a>

```typescript
public readonly instanceagentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugin#instanceagent_id DataOciComputeinstanceagentInstanceAgentPlugin#instanceagent_id}.

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugin#plugin_name DataOciComputeinstanceagentInstanceAgentPlugin#plugin_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugin#id DataOciComputeinstanceagentInstanceAgentPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



